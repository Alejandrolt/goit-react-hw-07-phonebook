import { DivSection, Title, TitleTwo } from './App.styled';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <DivSection>
      <Title>PHONEBOOk</Title>
      <Form />
      <TitleTwo>CONTACTS</TitleTwo>
      <Filter />
      <ContactList />
    </DivSection>
  );
};
