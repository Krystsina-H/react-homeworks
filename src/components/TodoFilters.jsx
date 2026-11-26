import { Segmented } from 'antd'

const TodoFilters = ({ filter, onFilterChange, disabled }) => {
  return (
    <Segmented
      value={filter}
      onChange={onFilterChange}
      disabled={disabled}
      options={[
        { label: 'Все', value: 'all' },
        { label: 'Активные', value: 'active' },
        { label: 'Выполненные', value: 'completed' },
      ]}
    />
  )
}

export default TodoFilters
