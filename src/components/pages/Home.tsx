import AppLayout from 'components/templates/AppLayout';
import O2Input from 'components/ui/molecules/O2Input/O2Input';

const HomePage = () => {
  return (
    <AppLayout>
      <O2Input 
        label={{
          text: 'Input',
          description: 'Optional'
        }} 
      />
    </AppLayout>
  );
};

export default HomePage;