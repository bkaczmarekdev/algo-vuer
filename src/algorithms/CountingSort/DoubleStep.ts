import type AlgoStep from '../AlgoStep'

export default interface DoubleStep {
  countStep: AlgoStep | null
  outputStep: AlgoStep | null
}
