import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Units() {
  const units = await getData("units");
  const columns = ["title","abbreviation"];
  return (
    <div>
      <FixedHeader title="Units" newItemLink="/dashboard/inventory/units/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <DataTable data={units} columns={columns}/>
      </div>

    </div>
  )
}
