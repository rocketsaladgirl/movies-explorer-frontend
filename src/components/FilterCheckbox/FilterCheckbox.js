import './FilterCheckbox.css'

function FilterCheckbox({checkHandler, isChecked}) {
    return (
        <label className='checkbox'>
            Короткометражки
            <input
                className='checkbox__element checkbox__element_type_real'
                type='checkbox'
                name='shorts'
                checked={isChecked}
                onChange={checkHandler}
            />
            <span className='checkbox__element checkbox__element_type_custom' />
        </label>
    )
};

export default FilterCheckbox;