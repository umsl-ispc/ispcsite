<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	
	<xsl:template match="library/book">
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
						<td>
							<xsl:for-each select="author">
								<xsl:value-of select="."/><br/>
							</xsl:for-each>
						</td>
						<td><xsl:value-of select="isbn"/></td>
						<td>
							<xsl:for-each select="subject">
								<xsl:value-of select="."/><br/>
							</xsl:for-each>
						</td>
						<td><xsl:value-of select="publisher"/></td>
					</tr>	
				</table>
			</body>
		</html>
	</xsl:template>
	
</xsl:stylesheet>