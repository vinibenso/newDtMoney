import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimentod e site</td>
            <td>
            <PriceHighlight variant="income">
              R$ 12.000,00
            </PriceHighlight>
            </td>

            <td>Venda</td>
            <td>10/08/2022</td>
          </tr>
          <tr>
            <td width="50%">Compudator</td>
            <td>
            <PriceHighlight variant="outcome">
               -R$ 6.000,00
            </PriceHighlight>
            </td>
            <td>Compra</td>
            <td>10/08/2022</td>
          </tr>

        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
      
      
    </div >
  )
}