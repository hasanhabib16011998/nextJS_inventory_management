import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Items() {
  const items = await getData("items");
  const columns = ["title","categoryId","sellingPrice"];
  return (
    <div>
      <FixedHeader title="Items" newItemLink="/dashboard/inventory/items/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <DataTable data={items} columns={columns}/>
      </div>

    </div>
  )
}
