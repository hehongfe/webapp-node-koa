var hello=async (ctx,next) => {
		console.log(ctx.request.method+":"+ctx.request.url);
		var name=ctx.params.name;
		ctx.response.body='<h1>`Hello, ${name} `</h1>';
}

module.exports={
	'GET /hello/:name':hello
};