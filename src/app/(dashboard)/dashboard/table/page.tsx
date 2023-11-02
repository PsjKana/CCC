import { PageContainer } from '@/_components/PageContainer/PageContainer';
import { PaginationTable } from '@/_components/Table/PaginationTable';
import { SimpleTable } from '@/_components/Table/SimpleTable';

export default function TablePage() {
  return (
    <PageContainer title='Tables'>
      <SimpleTable />
      <PaginationTable />
    </PageContainer>
  );
}
