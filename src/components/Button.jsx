import { ButtonStyle, ButtonStyle2, ButtonStyle3, Button3Extension } from "../styled";

export default function Button() {
  return (
    <div>
      <ButtonStyle>Botón 1</ButtonStyle>
      <ButtonStyle2>Botón 2</ButtonStyle2>
      <ButtonStyle3 $primary>Botón 3 con primary</ButtonStyle3>
      <ButtonStyle3>Botón 3 sin primary</ButtonStyle3>
      <Button3Extension>Extensión botón 3 sin primary</Button3Extension>
    </div>
  );
}
