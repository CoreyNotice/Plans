const React = require('react')

function Default(html) {
    return (
      <html>
      <head>
        <title>{html.title || 'Default'}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet"/>
      </head>
      <body>
         <header>
            <h2 >
              <a class="text-primary" href="/plans">Plan it Out</a></h2>
              <strong  class="text-primary">Click above to see all events</strong>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">

<a href={`/plans/new`}> <button class="btn btn-primary" type="button" >Add event</button></a>
</div>
          </header>
        <div class="container border border-dark rounded-lg">
            {html.children}
          </div>
       
      <footer class="text-right"><small class="text-right">Developed and Desgin by Corey Notice</small></footer>
        
      </body>
      </html>
    )
  }
  

module.exports = Default
