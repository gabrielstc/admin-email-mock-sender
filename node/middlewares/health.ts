export async function health(ctx: Context, next: () => Promise<any>) {
    // const {
    //   clients: { oms: omsClient },
    // } = ctx

    console.log('health check')


    ctx.status = 200
    ctx.set('Cache-Control', 'No-Cache')

    await next()
}