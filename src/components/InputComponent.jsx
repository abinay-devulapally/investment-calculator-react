function Input(props) {
  return (
    <input
      type="number"
      required
      name={props.name}
      value={props.value}
      onChange={(event) =>
        props.setOnChange(event.target.name, event.target.value)
      }
    />
  );
}

export default function InputComponent({ onChangeInput, initialInput }) {
  return (
    <section id="user-input">
      <div class="input-group">
        <div>
          <label>Initial Investment</label>
          <Input
            name="initialInvestment"
            value={initialInput.initialInvestment}
            setOnChange={onChangeInput}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <Input
            name="annualInvestment"
            value={initialInput.annualInvestment}
            setOnChange={onChangeInput}
          />
        </div>
      </div>
      <div class="input-group">
        <div>
          <label>Expected Return</label>
          <Input
            name="expectedReturn"
            value={initialInput.expectedReturn}
            setOnChange={onChangeInput}
          />
        </div>
        <div>
          <label>Duration</label>
          <Input
            name="duration"
            value={initialInput.duration}
            setOnChange={onChangeInput}
          />
        </div>
      </div>
    </section>
  );
}
