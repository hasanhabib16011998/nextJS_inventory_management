import DataTable from '@/app/components/dashboard/DataTable'
import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'


export default async function Adjustments() {
  const addAdjustmentsData = getData("adjustments/add");
  const transferAdjustmentsData = getData("adjustments/transfer");

  const [addAdjustments,transferAdjustments] = await Promise.all([addAdjustmentsData,transferAdjustmentsData])
  const addColumns = ["referenceNumber","addStockQty","receivingWarehouseId","itemId"];
  const transferColumns = ["referenceNumber","transferStockQty","givingWarehouseId", "receivingWarehouseId","itemId"]
  return (
    <div>
      <FixedHeader title="Adjustments" newItemLink="/dashboard/inventory/adjustments/new" />
      {/* Table */}
      <div className='my-4 p-8'>
        <h2 className='py-4 text-xl font-semibold'>Stock Increment Adjustments</h2>
        <DataTable data={addAdjustments} columns={addColumns} resourceTitle="adjustments/add"/>
      </div>

      <div className='my-4 p-8'>
      <h2 className='py-4 text-xl font-semibold'>Stock Transfer Adjustments</h2>
        <DataTable data={transferAdjustments} columns={transferColumns} resourceTitle="adjustments/transfer"/>
      </div>

    </div>
  )
}
