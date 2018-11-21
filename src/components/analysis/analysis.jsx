import React from 'react';
import styles from './analysis.module.scss';

const isPrime = value => {
  let i;

  for (i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const between = (from, to) =>
  Math.floor(Math.random() * (to - from + 1) + from);

const generateDataMatrix = ({ rows = 10, columns = 1 }) => {
  const MIN_DIGITS_PER_COLUMN = 1;
  const MAX_DIGITS_PER_COLUMN = 9;
  const SPACES_BETWEEN_COLUMNS = 1;

  const maxDigits = Math.min(
    MAX_DIGITS_PER_COLUMN,
    Math.max(columns - 2, SPACES_BETWEEN_COLUMNS),
  );
  let remaining = columns;
  const cols = [];

  while (remaining > SPACES_BETWEEN_COLUMNS) {
    let size = between(MIN_DIGITS_PER_COLUMN, Math.min(maxDigits, remaining));
    const remainder = remaining - size;

    if (remainder && remainder <= SPACES_BETWEEN_COLUMNS) {
      size += remainder;
    }

    cols.push({ size, right: between(0, 1) });
    remaining -= size + SPACES_BETWEEN_COLUMNS;
  }

  remaining = rows;

  const data = [];

  while (remaining--) {
    data.push(
      cols.map(({ size }) => {
        const magnitude = between(MIN_DIGITS_PER_COLUMN, size);
        return between(
          Math.pow(10, magnitude - 1),
          Math.pow(10, magnitude) - 1,
        );
      }),
    );
  }

  console.log({ data, columns, maxDigits, cols });
  return { data, cols };
};

class Analysis extends React.Component {
  state = {
    data: [],
    cols: [],
  };

  chRef = React.createRef();
  containerRef = React.createRef();

  componentDidMount() {
    this.generateData();
  }

  componentWillUnmount() {
    console.log(this.state);
  }

  generateData() {
    const chWidth = this.chRef.current.getBoundingClientRect().width;
    const containerWidth = this.containerRef.current.getBoundingClientRect()
      .width;
    const { data, cols } = generateDataMatrix({
      columns: Math.floor(containerWidth / chWidth),
    });

    this.setState({ data, cols });
  }

  render() {
    const { data, cols } = this.state;
    return (
      <div
        className={styles.container}
        ref={this.containerRef}
        style={{
          '--columns': cols.map(({ size }) => `${size}ch`).join(' '),
        }}
      >
        {data.map((row, i) => (
          <div key={`row-${i}`} className={styles.row}>
            {row.map((col, j) => (
              <span
                key={`col-${j}`}
                className={styles.column}
                style={{
                  '--justify': cols[j].right ? 'flex-end' : 'flex-start',
                  '--prime': isPrime(col) ? 1 : 0,
                }}
              >
                {(col || ' ')
                  .toString()
                  .split('')
                  .map((digit, k) => (
                    <span key={`digit-${k}`} className={styles.digit}>
                      {digit}
                    </span>
                  ))}
              </span>
            ))}
          </div>
        ))}
        <div className={styles.ch} ref={this.chRef}>
          0
        </div>
      </div>
    );
  }
}

export default Analysis;
