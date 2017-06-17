all:
	latex slides.tex
	latex slides.tex
	dvips -Ppdf -G0 -o slides.ps slides.dvi
	ps2pdf -sPAPERSIZE=a4 -DMaxSubsetPct=100 -dCompatibilityLevel=1.2 -dSubsetFonts=true -dEmbedAllFonts=true slides.ps slides.pdf

clean:
	rm -f *.log *.dvi *.aux *.blg *.ps *.nav *.out *.snm *.toc

