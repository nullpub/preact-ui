import { Datum as DatumType, fold } from '@nll/datum/es6/Datum';
import { FunctionalComponent, h } from 'preact';

export interface DatumProps {
  datum: DatumType<unknown>;
}

/**
 * @name Datum
 * @example
 * <Datum />
 */
export const Datum: FunctionalComponent<DatumProps> = ({ datum }) =>
  fold(
    () => (
      <section>
        <h1>Initial</h1>
      </section>
    ),
    () => (
      <section>
        <h1>Pending</h1>
      </section>
    ),
    v => (
      <section>
        <h1>Refresh</h1>
        <pre>{JSON.stringify(v, null, 2)}</pre>
      </section>
    ),
    v => (
      <section>
        <h1>Replete</h1>
        <pre>{JSON.stringify(v, null, 2)}</pre>
      </section>
    )
  )(datum);
