import styles from './LargePasswordDisplayCell.module.scss';

const LargePasswordDisplayCell = ({ index, children: letter }) => (
    <div className={styles.container}>
        <p>{letter}</p>
        <p>{index}</p>
    </div>
)

export default LargePasswordDisplayCell;
