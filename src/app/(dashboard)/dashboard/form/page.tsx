import FullForm from '@/_components/Form/FullForm';
import { SimpleForm } from '@/_components/Form/SimpleForm';
import { PageContainer } from '@/_components/PageContainer/PageContainer';

export default function Form() {
  return (
    <PageContainer title='Forms'>
      <SimpleForm />
      <FullForm />
    </PageContainer>
  );
}
