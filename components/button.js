import Button from '@material-ui/core/Button';

export default function ButtonComp({ color, name, onClick, className }) {

  return (
    <Button variant="contained" color={color} onClick={onClick} className={className ? className : undefined}>
      {name}
    </Button>
  );
}
