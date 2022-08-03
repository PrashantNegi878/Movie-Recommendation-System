import Figure from 'react-bootstrap/Figure';

function MyFigure(props) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={props.imgsrc}
      />
      <Figure.Caption>
        {props.text}
      </Figure.Caption>
    </Figure>
  );
}

export default MyFigure;