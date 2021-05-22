import { AppError } from '../../../../shared/error/AppError'
import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    )
  })
  it('should be able to create a new category', async () => {
    const category = {
      name: 'CategoryTesteName',
      description: 'CategoryTesteDescription'
    }

    await createCategoryUseCase.execute(category)

    const result = await categoriesRepositoryInMemory.findByName(category.name)

    expect(category.name).toBe(result.name)
    expect(result).toHaveProperty('id')
  })
  it('should be not able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'CategoryTesteName',
        description: 'CategoryTesteDescription'
      }

      await createCategoryUseCase.execute(category)
      await createCategoryUseCase.execute(category)
    }).rejects.toBeInstanceOf(AppError)
  })
})