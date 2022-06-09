import { pipe } from 'fp-ts/function';
import * as Rec from 'fp-ts/Record';
import * as Array from 'fp-ts/Array';

export type KeyFormatter = (key: string) => string;

export const formatKeys =
  <FormattedObject extends Record<string, unknown>>
  (formatter: KeyFormatter) =>
  (object: Record<string, unknown>): FormattedObject =>
    pipe(
      object,
      Rec.toEntries,
      Array.map<[string, unknown], [string, unknown]>(
        ([key, value]) => [formatter(key), value]
      ),
      Rec.fromEntries,
    ) as FormattedObject
