import { version } from '../../package.json';

export function Ui() {
  return (
    <div>
      <code>@acme/ui@v{version}</code>
    </div>
  );
}

export default Ui;
