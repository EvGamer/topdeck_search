import { formatKeys } from "./objectKeyFormatting";

describe('formatKeys', () => {
  it('adds symbol at the end', () => {
    const formatter = (key: string): string => `${key}1`;
    const initialObject = { a: 0, b: 1 };
    const expectedObject = { a1: 0, b1: 1 };

    expect(formatKeys<typeof expectedObject>(formatter)(initialObject)).toEqual({ a1: 0, b1: 1 })
  })
})
