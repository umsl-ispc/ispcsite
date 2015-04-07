<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	
	<xsl:template match="library">
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
						<td>Date</td>
					</tr>
					<xsl:apply-templates/>
				</table>
			</body>
		</html>
	</xsl:template>	
	<xsl:template match="book">
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
						<td><xsl:call-template name="dateFormat"/></td>
					</tr>
	</xsl:template>
	<xsl:template name="dateFormat">
		<!-- change MM/DD/CCYY to CCYY-MM-DD -->		
		<xsl:variable name="theDate">
			<xsl:value-of select="date"/>
		</xsl:variable>
			<xsl:value-of select="substring-after(substring-after($theDate,'/'),'/')"/>
			<xsl:text>-</xsl:text>
			<xsl:value-of select="substring-before($theDate,'/')"/>
			<xsl:text>-</xsl:text>
			<xsl:value-of select="substring-before(substring-after($theDate,'/'),'/')"/>
	</xsl:template>
</xsl:stylesheet>