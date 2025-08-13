import type AlgoStep from './AlgoStep'

export default abstract class AlgoState {
  input: number[]
  output: number[]
  array: number[]
  steps: AlgoStep[] | any
  speed: number
  currentStep: AlgoStep | null

  constructor(inputArray: number[]) {
    this.input = [...inputArray]
    this.array = [...inputArray]
    this.output = []
    this.steps = []
    this.speed = 1
    this.currentStep = null
  }
  abstract generateSteps(): void
  abstract run(speed: number): Promise<void>
  abstract pause(): void
  abstract reset(): void
  abstract nextStep(): void
  abstract previousStep(): void
  abstract getSteps(): AlgoStep[]
  abstract getCurrentStep(): AlgoStep | null
  abstract getSpeed(): number
  abstract setSpeed(speed: number): void
}
