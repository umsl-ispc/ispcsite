<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	
	<xsl:template match="book">
		<html>
			<head>
				<title>book test</title>
			</head>
			<body>
				<br/>
				<table align="center" cellpadding="3" cellspacing="3" border="1">
					<tr>
						<td>Title</td>
						<td>Author</td>
						<td>ISBN</td>
						<td>Subject</td>
						<td>Publisher</td>
					</tr>
					<tr>
						<td><xsl:value-of select="title"/></td>
						<td><xsl:value-of select="author"/></td>
						<td><xsl:value-of select="isbn"/></td>
						<td><xsl:value-of select="subject"/></td>
						<td><xsl:value-of select="publisher"/></td>
					</tr>
				</table>
			</body>
		</html>
	</xsl:template>
	
</xsl:stylesheet>