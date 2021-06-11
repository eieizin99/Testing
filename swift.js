const expr = 'Fuji';
switch (expr) {
  case 'Soap':
    console.log('Soap are $0.59 a pound.');
    break;
  case 'Soap':
  case 'Fuji':
    console.log('Soap and Fuji are $2.79 a pound.');
    
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
