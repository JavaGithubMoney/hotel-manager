<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- 一级导航栏 start-->
<header class="navbar navbar-fixed-top navbar-ld">
	<div class="container-fluid">
		<div class="header-content">
			<div class="homeMenu">
				<%--<span class="glyphicon glyphicon-align-justify"></span> <span--%>
					<%--class="span">菜单</span>--%>
				欢迎您，${curUser.USERNAME}
			</div>
			<div class="header-logo">
				<img src="${pageContext.request.contextPath}/img/logo.png" style="cursor: pointer;" onClick="window.location.href='${pageContext.request.contextPath}/views/user/home/homeUser.jsp'">
			</div>
			<div class="navbar-collapse">
				<ul class="nav navbar-nav navbar-right">

						<a href="${pageContext.request.contextPath}/logout.action"><span class="glyphicon glyphicon-log-out"></span></a>
						<%--<div class="dropdown-toggle" data-toggle="dropdown"--%>
							<%--id="user_dropdown">--%>
							<%--欢迎您，${curUser.USERNAME}--%>
							<%--&lt;%&ndash;<span class="caret"></span>&ndash;%&gt;--%>
						<%--</div>--%>
						<%--<ul class="dropdown-menu" aria-labelledby="user_dropdown"--%>
							<%--aria-expanded="false">--%>
							<%--<li class="li"><a href="#">修改密码</a></li>--%>
							<%--<li role="separator" class="divider"></li>--%>
							<%--<li class="li"><a--%>
								<%--href="${pageContext.request.contextPath}/logout.action">退出</a></li>--%>
						<%--</ul>--%>

				</ul>
			</div>
		</div>
	</div>
</header>
<!-- 一级导航栏 end-->