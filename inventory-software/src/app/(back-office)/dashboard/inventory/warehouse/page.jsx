import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Warehouse() {
  const warehouses = await getData("warehouse");
  const columns = ["title","location","warehouseType"];
  return (
    <div>
      <FixedHeader title="Warehouses" newItemLink="/dashboard/inventory/warehouse/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <DataTable data={warehouses} columns={columns}/>
      </div>

    </div>
  )
}
