/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface TProps {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<TProps> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};