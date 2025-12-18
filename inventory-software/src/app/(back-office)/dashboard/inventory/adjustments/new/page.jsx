import AdjustmentForm from '@/app/components/dashboard/AdjustmentForm';
import { getData } from '@/lib/getData';

export default async function NewAdjustments() {
  const itemsData = await getData("items");
  const warehousesData = await getData("warehouse");

  const [items, warehouses] = await Promise.all([itemsData, warehousesData]);

  return (
    <AdjustmentForm items={items} warehouses={warehouses}/>
  )
}
