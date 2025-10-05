import type {HttpContext} from '@adonisjs/core/http'
import CourseGroup from '#models/course_group'
import {createCourseGroupValidator} from '#validators/create_course_group'

export default class CourseGroupsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return CourseGroup.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCourseGroupValidator)
    const group = await CourseGroup.create(payload)
    return response.created(group)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await CourseGroup.findOrFail(params.id)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const group = await CourseGroup.findOrFail(params.id)
    await group.delete()
    return response.noContent()
  }
}
