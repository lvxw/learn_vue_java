package com.test.controller

import javax.servlet.http.{HttpServlet, HttpServletRequest, HttpServletResponse}

class MyScalaServlet extends HttpServlet{
  override def doPost(req: HttpServletRequest, resp: HttpServletResponse) = {
    doGet(req, resp)
  }

  override def doGet(req: HttpServletRequest, resp: HttpServletResponse) = {
    resp.getOutputStream.print("scala extends HttpServlet!")
  }
}
