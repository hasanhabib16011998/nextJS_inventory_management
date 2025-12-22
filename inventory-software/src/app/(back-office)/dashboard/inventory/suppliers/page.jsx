import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Suppliers() {
  const suppliers = await getData("suppliers");
  const columns = ["title","phone","email"];
  const data = suppliers.map(obj=>{
    return {
      title: obj.title,
      phone: obj.phone,
      email: obj.email
    };
  })
  return (
    <div>
      <FixedHeader title="Suppliers" newItemLink="/dashboard/inventory/suppliers/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <DataTable data={data} columns={columns}/>
      </div>

    </div>
  )
}
