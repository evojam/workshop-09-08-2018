import { overlap, Range } from '../overlap'

describe('overlap: returns true of false if the ranges overlap or not', () => {
  it('separate ranges', () => {
    const r1: Range = [0, 1]
    const r2: Range = [2, 3]
    expect(overlap(r1, r2)).toBe(false)
    expect(overlap(r2, r1)).toBe(false)
  })

  it('ranges touch on one end', () => {
    const r1: Range = [0, 1]
    const r2: Range = [1, 2]
    expect(overlap(r1, r2)).toBe(true)
  })

  it('ranges overlap', () => {
    const r1: Range = [0, 2]
    const r2: Range = [1, 3]
    expect(overlap(r1, r2)).toBe(true)
    expect(overlap(r2, r1)).toBe(true)
  })

  it('ranges are exactly on top of each other', () => {
    const r1: Range = [0, 2]
    const r2: Range = [0, 2]
    expect(overlap(r1, r2)).toBe(true)
  })

  it('one range is contained entirely inside another', () => {
    const r1: Range = [0, 3]
    const r2: Range = [1, 2]
    expect(overlap(r1, r2)).toBe(true)
    expect(overlap(r2, r1)).toBe(true)
  })
})
