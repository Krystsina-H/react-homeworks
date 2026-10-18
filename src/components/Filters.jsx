import { Segmented } from 'antd'

const Filters = ({ filter, setFilter }) => {
  return (
    <Segmented
      block
      value={filter}
      onChange={setFilter}
      options={[
        { label: 'Все', value: 'all' },
        { label: 'Активные', value: 'active' },
        { label: 'Завершённые', value: 'completed' },
      ]}
    />
  )
}
export default Filters
