import pandas as pd

imgFile_df = pd.read_csv("MovieGenre.csv", usecols=['Title','Poster'])
movieFile_df = pd.read_json(  "movieDetails.json" )

#Replace posters in movieFile_df by values in movieFile_df
result_df = pd.merge(imgFile_df, movieFile_df, left_on='Title', right_on='title')
result_df = result_df.drop(columns=['title', 'poster'])

#add a level column with random values(1,2,3) for each movie
range1 = range(315)
series1 = pd.Series(1, index=range1)
series2 = pd.Series(2, index=range1)
series3 = pd.Series(3, index=range(len(result_df)-630))
result_s = pd.concat([series1, series2, series3], axis=0)
result_s = result_s.sample(frac=1)
result_s = result_s.reset_index(drop=True)

result_df['level'] = result_s
result_df.to_json('./movies.json', orient='records')