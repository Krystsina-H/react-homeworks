import { Segmented } from 'antd'

function TaskFilters({ value, onChange }) {
  return (
    <Segmented
      value={value}
      onChange={onChange}
      options={[
        { label: 'Все', value: 'all' },
        { label: 'Активные', value: 'active' },
        { label: 'Выполненные', value: 'completed' },
      ]}
    />
  )
}

export default TaskFilters
