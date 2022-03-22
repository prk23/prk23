import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month = props.dateProps.toLocaleString('en-US', { month: 'long' });
    const day = props.dateProps.toLocaleString('en-US', { day: '2-digit' });
    const year = props.dateProps.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;