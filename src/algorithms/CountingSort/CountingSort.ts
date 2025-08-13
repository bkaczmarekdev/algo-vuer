import AlgoState from '../AlgoState'
import type AlgoStep from '../AlgoStep'
import type DoubleStep from './DoubleStep'

export default class CountingSort extends AlgoState {
  counts: number[] = []
  stepIterator: number = 0
  currentCountingStep: AlgoStep | null

  private isRunning = false

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  constructor() {
    const inputArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 20))
    super(inputArray)
    this.input = inputArray
    this.currentCountingStep = null
    this.generateSteps()
  }

  async run(speed: number): Promise<void> {
    this.setSpeed(speed)
    if (this.isRunning) return
    if (this.stepIterator == this.steps.length) {
      this.reset()
    }
    this.isRunning = true

    const baseDelay = 500

    while (this.stepIterator < this.steps.length && this.isRunning) {
      let step = this.steps[this.stepIterator]
      if (step.countStep) {
        this.currentCountingStep = step.countStep
      }
      if (step.outputStep) {
        this.currentStep = step.outputStep
      }
      this.stepIterator++
      await this.sleep(baseDelay / this.getSpeed())
    }

    this.isRunning = false
  }

  generateSteps(): void {
    let max = Math.max(...this.input)
    this.counts = Array(max + 1).fill(0)
    for (let i = 0; i < this.input.length; i++) {
      this.steps.push({
        countStep: {
          array: [...this.counts],
          workingIndex: this.input[i],
        } as AlgoStep,
        outputStep: null,
      } as DoubleStep)
      this.counts[this.input[i]]++
    }

    for (let i = 0; i < this.counts.length; i++) {
      this.counts[i] += this.counts[i - 1] || 0
      this.steps.push({
        countStep: {
          array: [...this.counts],
          workingIndex: i,
        } as AlgoStep,
        outputStep: null,
      } as DoubleStep)
    }

    this.output = Array(this.input.length).fill(0)
    for (let i = this.input.length - 1; i >= 0; i--) {
      this.steps.push({
        countStep: {
          array: [...this.counts],
          workingIndex: this.input[i],
        } as AlgoStep,
        outputStep: null,
      } as DoubleStep)

      this.output[--this.counts[this.input[i]]] = this.input[i]

      this.steps.push({
        countStep: {
          array: [...this.counts],
          workingIndex: this.input[i],
        } as AlgoStep,
        outputStep: {
          array: [...this.output],
          workingIndex: this.counts[this.input[i]],
        } as AlgoStep,
      } as DoubleStep)
    }
  }

  pause(): void {
    this.isRunning = false
  }

  reset(): void {
    this.isRunning = false
    this.stepIterator = 0
    this.currentStep = null
    this.currentCountingStep = null
    this.output = []
    this.array = [...this.input]
  }

  nextStep(): void {
    if (this.stepIterator >= this.steps.length) return

    let step = this.steps[this.stepIterator]
    if (step.countStep) {
      this.currentCountingStep = step.countStep
    }
    if (step.outputStep) {
      this.currentStep = step.outputStep
    }
    this.stepIterator++
  }

  previousStep(): void {
    if (this.stepIterator <= 0) return

    this.stepIterator--
    let step = this.steps[this.stepIterator]
    if (step.countStep) {
      this.currentCountingStep = step.countStep
    }
    if (step.outputStep) {
      this.currentStep = step.outputStep
    }
  }

  getSteps(): AlgoStep[] {
    return this.steps
  }

  getCurrentStep(): AlgoStep | null {
    return this.currentStep
  }

  getCurrentCountingStep(): AlgoStep | null {
    return this.currentCountingStep
  }

  getSpeed(): number {
    return this.speed
  }

  setSpeed(speed: number): void {
    this.speed = speed
  }
}
