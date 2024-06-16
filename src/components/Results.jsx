import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ initialInput }) {
  const results = calculateInvestmentResults(initialInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Captail</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>
              {formatter.format(
                result.valueEndOfYear -
                  result.annualInvestment * result.year -
                  initialInvestment
              )}
            </td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
