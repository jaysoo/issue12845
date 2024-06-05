import * as ReactDOM from 'react-dom/client';
import { Container, Injectable } from '@wikia/dependency-injection';

@Injectable()
class DependencyClass {
  name = 'implementation dependency';
}

@Injectable()
class MasterClass {
  name = 'implementation master';

  constructor(public dep: DependencyClass) {}
}

const container = new Container();

const instance = container.get(MasterClass);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <h1>{instance.name}</h1>
);
