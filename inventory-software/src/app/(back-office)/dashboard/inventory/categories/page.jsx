import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Categories() {
  const categories = await getData("categories");
  const columns = ["title","description"];
  const data = categories.map(obj=>{
    return {
      title: obj.title,
      description: obj.description
    };
  })
  return (
    <div>
      <FixedHeader title="Categories" newItemLink="/dashboard/inventory/categories/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <DataTable data={data} columns={columns}/>
      </div>

    </div>
  )
}
