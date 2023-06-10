import { TestAPI } from '../plugin-test-api';
describe('test-create', () => {

  it('200: Positive case', async () => {
    const res = await (new TestAPI).method()
    expect(res).toEqual(expect.objectContaining({
      id: expect.any(Number),
      m_name: 'nnn',
      m_mail: 'mmm'
    }))
  })

})
