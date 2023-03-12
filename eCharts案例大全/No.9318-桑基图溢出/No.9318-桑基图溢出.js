
option ={
    "color": ["#7C6DDD"],
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove",
        "confine": true,
         formatter: (val) => {
            if (val.data.source) {
              const source = JSON.parse(val.data.source).label
              const target = JSON.parse(val.data.target).label
              return `${source} -> ${target} ${val.data.value}`
            }

            return JSON.parse(val.data.name).label
          }
    },
    "series": [
        {
            "type": "sankey",
            "data": [
                {
                    "name": "{\"label\":\"一级\",\"index\":0}"
                },
                {
                    "name": "{\"label\":\"公司\",\"index\":1}"
                },
                {
                    "name": "{\"label\":\"总公司\",\"index\":1}"
                },
                {
                    "name": "{\"label\":\"Aaron Hawkins\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Adam Hart\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alan Haines\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alan Schoenberger\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alejandro Savely\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alex Russell\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alice McCarthy\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Allen Rosenblatt\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Andrew Gjertsen\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Andy Gerbode\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Andy Yotov\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ann Blume\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Anna Häberlin\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Anthony Jacobs\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Anthony Johnson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Anthony O'Donnell\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Barry Blumstein\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Barry Pond\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Bart Watters\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Bill Stewart\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Bill Tyler\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brad Norvell\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brendan Murry\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brendan Sweed\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brian Moss\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Cari MacIntyre\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Cari Sayre\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Carl Jackson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Charles Sheldon\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Chris Selesnick\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Christine Abelman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Christine Phan\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Cindy Schnelling\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Craig Molinari\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Craig Yedwab\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Cyma Kinney\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Cynthia Voltz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Damala Kotsonis\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dan Reichenbach\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dario Medina\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Darrin Van Huff\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dave Hallsten\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"David Kendrick\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"David Wiener\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dean Katz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Denise Monton\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Don Jones\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dorothy Badders\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dorothy Wardle\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dorris liebe\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ed Braxton\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Edward Becker\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Edward Hooks\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ellis Ballard\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Erica Bern\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Erin Smith\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Fred Chung\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Fred Hopkins\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Fred Wasserman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Gene Hale\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Georgia Rosenberg\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Grant Thornton\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Greg Guthrie\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Guy Phonely\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Harold Engle\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Harold Ryan\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Heather Kirkland\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Helen Wasserman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Henry Goldwyn\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Hilary Holden\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jane Waco\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Janet Molinari\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jason Klamczynski\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jennifer Patt\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jill Stevenson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jim Mitchum\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jim Sink\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"John Grady\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jonathan Doherty\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Julie Creighton\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Justin Deggeller\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Justin Ellison\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Karen Bern\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Karen Carlisle\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Karen Seio\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Katherine Nockton\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Katrina Edelman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Kean Nguyen\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Kelly Lampkin\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ken Black\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ken Brennan\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ken Heidel\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Kristen Hastings\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Laura Armstrong\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Luke Schmidt\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Marina Lichtenstein\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mark Haberlin\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Matthew Clasen\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Maureen Fritzler\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Maya Herman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michael Kennedy\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michael Paige\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michael Stewart\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michelle Ellison\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michelle Lonsdale\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mike Caudle\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mitch Gastineau\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mitch Willingham\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Monica Federle\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Muhammed MacIntyre\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Muhammed Yedwab\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Neil Ducich\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Nicole Hansen\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Noah Childs\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Pamela Coakley\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Pauline Webber\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Phillip Breyer\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Quincy Jones\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Rachel Payne\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Randy Ferguson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ricardo Sperren\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Rick Reed\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Rob Williams\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Roland Schwarz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Ruben Ausman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Sally Hughsby\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Shaun Chance\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Stefania Perrino\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Stefanie Holloman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Stephanie Phelps\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Steve Chapman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Stewart Carmichael\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Stuart Van\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Susan Gilcrest\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Tamara Chand\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Theresa Coyne\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Thomas Seio\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Todd Sumrall\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Tom Stivers\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Tom Zandusky\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Tracy Poddar\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Vivek Grady\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Adam Bellavance\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alan Dominguez\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Alyssa Tate\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Anthony Garverick\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Arthur Wiediger\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Barry Franz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Becky Castell\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Benjamin Farhat\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Beth Thompson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Bill Eplett\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brad Eason\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brad Thomas\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Brendan Dodson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Carl Weiss\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Catherine Glotzbach\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Christopher Schild\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Chuck Clark\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Clay Rozendal\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Corey Roper\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Corinna Mitchell\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Craig Leslie\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Cynthia Delaney\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Daniel Raglin\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Deborah Brumfield\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dennis Bolton\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dennis Pardue\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Dianna Wilson\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Eileen Kiefer\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Emily Ducich\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Eugene Hildebrand\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Eugene Moren\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Evan Minnotte\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Frank Carlisle\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Frank Merwin\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Harold Dahlen\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Heather Jas\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jesus Ocampo\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Jim Kriz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Julia Barnett\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Julie Kriz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Katherine Murray\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Katrina Bavinger\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Lindsay Castell\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Marc Harrigan\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Maria Etezadi\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Maria Zettner\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mathew Reese\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Matt Abelman\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Maureen Gastineau\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Meg O'Connel\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michael Grace\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michelle Arnett\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Michelle Tran\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mick Hernandez\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Mike Pelletier\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Nancy Lomonaco\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Nathan Mautz\",\"index\":2}"
                },
                {
                    "name": "{\"label\":\"Neil Französisch\",\"index\":2}"
                }
            ],
            "links": [
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 13
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 11
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 10
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 16
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 12
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 9
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 16
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 11
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 9
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"一级\",\"index\":0}",
                    "target": "{\"label\":\"总公司\",\"index\":1}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Aaron Hawkins\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Adam Hart\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Alan Haines\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Alan Schoenberger\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Alejandro Savely\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Alex Russell\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Alice McCarthy\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Allen Rosenblatt\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Andrew Gjertsen\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Andy Gerbode\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Andy Yotov\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ann Blume\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Anna Häberlin\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Anthony Jacobs\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Anthony Johnson\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Anthony O'Donnell\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Barry Blumstein\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Barry Pond\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Bart Watters\",\"index\":2}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Bill Stewart\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Bill Tyler\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Brad Norvell\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Brendan Murry\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Brendan Sweed\",\"index\":2}",
                    "value": 13
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Brian Moss\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Cari MacIntyre\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Cari Sayre\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Carl Jackson\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Charles Sheldon\",\"index\":2}",
                    "value": 11
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Chris Selesnick\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Christine Abelman\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Christine Phan\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Cindy Schnelling\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Craig Molinari\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Craig Yedwab\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Cyma Kinney\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Cynthia Voltz\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Damala Kotsonis\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dan Reichenbach\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dario Medina\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Darrin Van Huff\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dave Hallsten\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"David Kendrick\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"David Wiener\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dean Katz\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Denise Monton\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Don Jones\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dorothy Badders\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dorothy Wardle\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Dorris liebe\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ed Braxton\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Edward Becker\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Edward Hooks\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ellis Ballard\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Erica Bern\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Erin Smith\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Fred Chung\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Fred Hopkins\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Fred Wasserman\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Gene Hale\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Georgia Rosenberg\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Grant Thornton\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Greg Guthrie\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Guy Phonely\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Harold Engle\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Harold Ryan\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Heather Kirkland\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Helen Wasserman\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Henry Goldwyn\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Hilary Holden\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jane Waco\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Janet Molinari\",\"index\":2}",
                    "value": 10
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jason Klamczynski\",\"index\":2}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jennifer Patt\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jill Stevenson\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jim Mitchum\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jim Sink\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"John Grady\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Jonathan Doherty\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Julie Creighton\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Justin Deggeller\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Justin Ellison\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Karen Bern\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Karen Carlisle\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Karen Seio\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Katherine Nockton\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Katrina Edelman\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Kean Nguyen\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Kelly Lampkin\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ken Black\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ken Brennan\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ken Heidel\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Kristen Hastings\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Laura Armstrong\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Luke Schmidt\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Marina Lichtenstein\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Mark Haberlin\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Matthew Clasen\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Maureen Fritzler\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Maya Herman\",\"index\":2}",
                    "value": 16
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Michael Kennedy\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Michael Paige\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Michael Stewart\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Michelle Ellison\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Michelle Lonsdale\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Mike Caudle\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Mitch Gastineau\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Mitch Willingham\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Monica Federle\",\"index\":2}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Muhammed MacIntyre\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Muhammed Yedwab\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Neil Ducich\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Nicole Hansen\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Noah Childs\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Pamela Coakley\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Pauline Webber\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Phillip Breyer\",\"index\":2}",
                    "value": 12
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Quincy Jones\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Rachel Payne\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Randy Ferguson\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ricardo Sperren\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Rick Reed\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Rob Williams\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Roland Schwarz\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Ruben Ausman\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Sally Hughsby\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Shaun Chance\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Stefania Perrino\",\"index\":2}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Stefanie Holloman\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Stephanie Phelps\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Steve Chapman\",\"index\":2}",
                    "value": 9
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Stewart Carmichael\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Stuart Van\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Susan Gilcrest\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Tamara Chand\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Theresa Coyne\",\"index\":2}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Thomas Seio\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Todd Sumrall\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Tom Stivers\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Tom Zandusky\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Tracy Poddar\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"公司\",\"index\":1}",
                    "target": "{\"label\":\"Vivek Grady\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Adam Bellavance\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Alan Dominguez\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Alyssa Tate\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Anthony Garverick\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Arthur Wiediger\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Barry Franz\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Becky Castell\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Benjamin Farhat\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Beth Thompson\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Bill Eplett\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Brad Eason\",\"index\":2}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Brad Thomas\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Brendan Dodson\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Carl Weiss\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Catherine Glotzbach\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Christopher Schild\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Chuck Clark\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Clay Rozendal\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Corey Roper\",\"index\":2}",
                    "value": 16
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Corinna Mitchell\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Craig Leslie\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Cynthia Delaney\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Daniel Raglin\",\"index\":2}",
                    "value": 7
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Deborah Brumfield\",\"index\":2}",
                    "value": 11
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Dennis Bolton\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Dennis Pardue\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Dianna Wilson\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Eileen Kiefer\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Emily Ducich\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Eugene Hildebrand\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Eugene Moren\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Evan Minnotte\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Frank Carlisle\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Frank Merwin\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Harold Dahlen\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Heather Jas\",\"index\":2}",
                    "value": 8
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Jesus Ocampo\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Jim Kriz\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Julia Barnett\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Julie Kriz\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Katherine Murray\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Katrina Bavinger\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Lindsay Castell\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Marc Harrigan\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Maria Etezadi\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Maria Zettner\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Mathew Reese\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Matt Abelman\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Maureen Gastineau\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Meg O'Connel\",\"index\":2}",
                    "value": 3
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Michael Grace\",\"index\":2}",
                    "value": 1
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Michelle Arnett\",\"index\":2}",
                    "value": 5
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Michelle Tran\",\"index\":2}",
                    "value": 6
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Mick Hernandez\",\"index\":2}",
                    "value": 4
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Mike Pelletier\",\"index\":2}",
                    "value": 9
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Nancy Lomonaco\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Nathan Mautz\",\"index\":2}",
                    "value": 2
                },
                {
                    "source": "{\"label\":\"总公司\",\"index\":1}",
                    "target": "{\"label\":\"Neil Französisch\",\"index\":2}",
                    "value": 4
                }
            ],
            "layoutIterations": 36,
            "top": "20%",
            "left": "20%",
            "right": "20%",
            "bottom": "40%",
            "label": {
                "show": true,
                "textStyle": {
                    "color": "rgba(0,0,0,0.7)",
                    "fontFamily": "Arial",
                    "fontSize": 10
                },
                formatter: (val) => {
                  return JSON.parse(val.data.name).label
                },
            }
        }
    ]
};