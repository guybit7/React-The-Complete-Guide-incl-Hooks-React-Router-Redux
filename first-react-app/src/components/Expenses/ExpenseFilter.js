import './ExpenseFilter.css';

function ExpenseFilter(props) {

    const dropdownChangeHandler = (event) => {
        console.log(event.target.value);
        props.onChangeFilter(event.target.value)
    };

    return <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select id="years" name="years" value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    </div>
}

export default ExpenseFilter;