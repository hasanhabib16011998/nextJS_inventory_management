import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Brands() {
  const brands = await getData("brands");
  const columns = ["title"];
  return (
    <div>
      <FixedHeader title="Brands" newItemLink="/dashboard/inventory/brands/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <DataTable data={brands} columns={columns} resourceTitle="brands"/>
      </div>

    </div>
  )
}
