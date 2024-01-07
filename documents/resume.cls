\ProvidesClass{resume}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}} 
\ProcessOptions\relax
\LoadClass{article} 
\usepackage[parfill]{parskip}
\usepackage[dvipsnames]{xcolor}
\usepackage{array}
\usepackage{ifthen} 
\usepackage{geometry}
\usepackage{hyperref}
\usepackage{graphicx}
\pagestyle{empty} 

\hypersetup{
    colorlinks=true,
    linkcolor=PineGreen,
    filecolor=PineGreen,      
    urlcolor=PineGreen,
}

\geometry{
    top=0.2in, 
    bottom=0.1in,
    left=0.3in,
    right=0.3in,
}

\newcommand{\name}[1]{\renewcommand{\name}{#1}}
\newcommand{\linksep}{$\bullet$}

\let \@linkone \relax
\let \@linktwo \relax
\let \@linkthree \relax

\newcommand{\links}[1]{
    \@ifundefined{@linkone}{
        \def \@linkone {#1}
    }{
        \@ifundefined{@linktwo}{ 
            \def \@linktwo {#1}
        }{
            \def \@linkthree {#1}
        }
    }
}

\newcommand{\printname}{
    \begingroup
        \hfil{\Huge\bfseries\name}\hfil
        \break 
    \endgroup
}

\newcommand{\printlink}{
    \begingroup
        {\centerline{\@linkone \ \linksep  \ \@linktwo \ \linksep \ \@linkthree}}
    \endgroup
}

\let\ori@document=\document 
\renewcommand{\document}{
    \ori@document
    \printname 
    \smallskip
    \printlink
    \vspace{0.5em}
    \hrule
}

\newenvironment{rSection}[1]{ 
    \textcolor{PineGreen}{\MakeUppercase{\large\textbf{#1}}}
    \vspace{-0.8em}
    \begin{list}{}{ 
        \setlength{\leftmargin}{1em}
    }
    \item[] 
    }{
    \end{list}
    \vspace{0.5em}
}


\newenvironment{rSubsection}[2]{ 
    \textbf{#1} \hfill {#2} 
    \begin{list}
        {$\cdot$}{\leftmargin=0.1em}
        \setlength{\itemsep}{-0.8em} \vspace{-0.9em} 
}
{
    \end{list}
    \vspace{-0.3em}
}

\newenvironment{rOthers}[2]{ 
    {#1} \hfill {#2}
    \vspace{-0.5em}
}{
}