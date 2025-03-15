package entity

type DeckList struct {
	HeroAndArena []Card `json:"heroAndArena"`
	Deck         []Card `json:"deck"`
	SideBoard    []Card `json:"sideBoard"`
	Tokens       []Card `json:"tokens"`
	Maybe        []Card `json:"maybe"`
}
